import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => <option key={i} value={o}>{o}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       onChange && onChange(e);
       onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <select onChange={onChangeCallback} {...restProps} value={restProps.value}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
