import { {{name_with_underscores}} } from "./{{name_with_dashes}}.module.css"

export type {{name}}Props = {};

export const {{name}} = ({ }: {{name}}Props) => {
    return (
        <div className={ {{name_with_underscores}} }>
            {{name}}
        </div>
    )
};