import React, { Component } from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme
} from 'victory'

export default class Chart extends Component {
    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
            >
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    alignment="start"
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]
                    }
                />
            </VictoryChart>
        )
    }
}