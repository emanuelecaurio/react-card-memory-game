import React, {CSSProperties, useEffect, useState} from "react";
import ReactFlipCard from "reactjs-flip-card";
import allEqual from "./AllEqual";
import getGeneratedGrid from "./getGeneratedGrid";
import './MemoryGame.css'

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

const cardStatuses = {
    clicked: 'X',
    discovered: 'D',
    hole: ''
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
    const [cards, setCards] = useState<string[]>(iconsGrid.map(_ => cardStatuses.hole)) // <-- card statuses

    useEffect(() => {
        const finished = allEqual(cards, cardStatuses.discovered)
        if (finished) {
            setTimeout(() => {
                gameFinished()
            }, 200)
        }
        // omit gameFinished: we can safely omit function props.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards])

    // handle user card statuses clicks
    useEffect(() => {
        let cardsClickedArray: any = []
        cards.forEach((status, index) => {
            const icon = iconsGrid[index]
            if (status === cardStatuses.clicked) {
                cardsClickedArray.push({status, icon})
            }
        })
        if (cardsClickedArray.length === 2) {
            if (cardsClickedArray[0].icon === cardsClickedArray[1].icon) {
                foundPair()
                setTimeout(() => {
                    const c = cards.map(status => {
                        if (status === cardStatuses.clicked)
                            return cardStatuses.discovered
                        return status
                    })
                    setCards(c)
                }, 200)
            } else {
                notFoundPair()
                setTimeout(() => {
                    const c = cards.map(status => {
                        if (status === cardStatuses.clicked)
                            return cardStatuses.hole
                        return status
                    })
                    setCards(c)
                }, 700)
            }
        }
        // omit foundPair and notFoundPair: we can safely omit function props.
        // If not, we have to handle the "onetime" called function with additional flag state
        // we can safely omit iconsGrid because it's initialized just one time on constructor
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards])

    const getCardStyle = (index: number) => ({
        background: cards[index] === cardStatuses.discovered
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
                    return <ReactFlipCard
                        key={index}
                        flipCardContainerCss={`${cards[index] === cardStatuses.discovered ? 'MemoryGame_pairFound' : ''}`}
                        flipByProp={cards[index] !== cardStatuses.hole}
                        width={"auto"}
                        height={"auto"}
                        cursor={"pointer"}
                        flipTrigger={'disabled'}
                        frontStyle={getCardStyle(index)}
                        backStyle={getCardStyle(index)}
                        frontCss={`MemoryGame_cardCss ${frontCardsCss}`}
                        backCss={`MemoryGame_cardCss ${backCardsCss}`}
                        onClick={() => {
                            const c = [...cards]
                            let currentCard = c[index]
                            const twoCardsClicked = c.filter(c => c === cardStatuses.clicked).length === 2
                            if (twoCardsClicked)
                                return
                            if (currentCard === cardStatuses.clicked || currentCard === cardStatuses.discovered)
                                return
                            c[index] = cardStatuses.clicked
                            setCards(c)
                        }}
                        frontComponent={<div/>}
                        backComponent={<div className={"MemoryGame_padding20"}>{icon}</div>}
                    />
                })}
            </div>
        </div>

    )
}