import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const classMerger = (defaultClasses?: string, additionalClasses?: string) => {
    const className = twMerge(
        defaultClasses && clsx(
            defaultClasses
        ),
        additionalClasses && clsx(additionalClasses)
    )

    return className
}