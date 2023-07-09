import React from 'react'

export default function About() {
    return (
        <>
            <div>This is a component</div>
            <p>
                To address issues that do not require attention, run:
                npm audit fix

                To address all issues (including breaking changes), run:
                npm audit fix --force

                Run `npm audit` for details.
            </p>
        </>

    )
}
