import React, {CSSProperties, useEffect, useState} from "react";
import ReactFlipCard from "reactjs-flip-card";
import allEqual from "./AllEqual";
import getGeneratedGrid from "./getGeneratedGrid";
import './MemoryGame.css'
import {availableCardStatuses} from "./consts";

interface MemoryGameProps {
    containerStyle?: CSSProperties,
    gridNumber: number,
    foundPair?: Function,
    notFoundPair?: Function,
    gameFinished?: Function,
    holeCardsColor?: string,
    foundCardsColor?: string,
    frontCardsCss?: string
    backCardsCss?: string
}

function validateGridNumber(gridNumber: number) {
    if (!Number.isInteger(gridNumber) || !(gridNumber >= 4 && gridNumber <= 6))
        throw new Error("grid number must be an Integer number between 4 and 6")
    return null
}

export default function MemoryGame(
    {
        containerStyle = {},
        gridNumber = 4,
        foundPair = () => undefined,
        notFoundPair = () => undefined,
        gameFinished = () => undefined,
        holeCardsColor = 'orange',
        foundCardsColor = 'yellow',
        frontCardsCss = '',
        backCardsCss = ''
    }: MemoryGameProps) {
    useState(validateGridNumber(gridNumber))
    const [iconsGrid] = useState<React.ReactNode[]>(getGeneratedGrid(gridNumber)) // <-- Initialize the grid just one time, only when this component is mounted
    const [cardStatuses, setCardsStatuses] = useState<string[]>(iconsGrid.map(_ => availableCardStatuses.hole))

    useEffect(() => {
        const finished = allEqual(cardStatuses, availableCardStatuses.discovered)
        if (finished) {
            setTimeout(() => {
                gameFinished()
            }, 200)
        }
        // omit gameFinished: we can safely omit function props.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardStatuses])

    // handle user card statuses clicks
    useEffect(() => {
        let cardsClickedArray: { status: string, icon: React.ReactNode }[] = []
        cardStatuses.forEach((status, index) => {
            const icon = iconsGrid[index]
            if (status === availableCardStatuses.clicked) {
                cardsClickedArray.push({status, icon})
            }
        })
        if (cardsClickedArray.length === 2) {
            if (cardsClickedArray[0].icon === cardsClickedArray[1].icon) {
                foundPair()
                setTimeout(() => {
                    const newCardStatuses = cardStatuses.map(status => {
                        if (status === availableCardStatuses.clicked)
                            return availableCardStatuses.discovered
                        return status
                    })
                    setCardsStatuses(newCardStatuses)
                }, 200)
            } else {
                notFoundPair()
                setTimeout(() => {
                    const newCardStatuses = cardStatuses.map(status => {
                        if (status === availableCardStatuses.clicked)
                            return availableCardStatuses.hole
                        return status
                    })
                    setCardsStatuses(newCardStatuses)
                }, 700)
            }
        }
        // omit foundPair and notFoundPair: we can safely omit function props.
        // If not, we have to handle the "onetime" called function with additional flag state
        // we can safely omit iconsGrid because it's initialized just one time on constructor
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardStatuses])

    const getCardStyle = (currentCardStatus: string) => ({
        background: currentCardStatus === availableCardStatuses.discovered
            ? foundCardsColor
            : holeCardsColor
    })

    return (
        <div>
            <div
                className={`MemoryGame_grid MemoryGame_gridTemplateColumns${gridNumber}`}
                style={containerStyle}
            >
                {iconsGrid.map((icon, index) => {
                    const currentCardStatus = cardStatuses[index]
                    return <ReactFlipCard
                        key={index}
                        flipCardContainerCss={`${currentCardStatus === availableCardStatuses.discovered ? 'MemoryGame_pairFound' : ''}`}
                        flipByProp={currentCardStatus !== availableCardStatuses.hole}
                        width={"auto"}
                        height={"auto"}
                        cursor={"pointer"}
                        flipTrigger={'disabled'}
                        frontStyle={getCardStyle(currentCardStatus)}
                        backStyle={getCardStyle(currentCardStatus)}
                        frontCss={`MemoryGame_cardCss ${frontCardsCss}`}
                        backCss={`MemoryGame_cardCss ${backCardsCss}`}
                        onClick={() => {
                            const cardStatusesClone = [...cardStatuses]
                            const currentCard = cardStatusesClone[index]
                            const twoCardsClicked: boolean = cardStatusesClone.filter(
                                c => c === availableCardStatuses.clicked
                            ).length === 2

                            if (twoCardsClicked ||
                                currentCard === availableCardStatuses.clicked ||
                                currentCard === availableCardStatuses.discovered) {
                                return
                            }
                            cardStatusesClone[index] = availableCardStatuses.clicked
                            setCardsStatuses(cardStatusesClone)
                        }}
                        frontComponent={<div/>}
                        backComponent={<div className={"MemoryGame_padding20"}>{icon}</div>}
                    />
                })}
            </div>
        </div>

    )
}