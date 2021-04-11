import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import { useState, useEffect } from 'react'

// import interface
import { Item } from '../typings/template'

const types = [
    {
        value: 'tree',
        label: '树 1',
    },
    {
        value: 'tree 2',
        label: '树 2',
    },
]

interface Props {
    item: Item
    onChange: (item: Item) => void
    onSuccess: (name: string, comment: string) => void
    onCancel: () => void
}

function PublishPage(props: Props) {

    useEffect(() => {
        props.onChange({
            type: 'tree',
            x: 250,
            y: 850,
            author: 'OrangeX4',
            comment: 'Hello World!'
        })
        // eslint-disable-next-line
    }, [])

    // Name
    const [isNameError, setIsNameError] = useState(false)
    const [name, setName] = useState('')
    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsNameError(false)
        setName(e.target.value)
    }

    // Comment
    const [isCommentError, setIsCommentError] = useState(false)
    const [comment, setComment] = useState('')
    function handleCommentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsCommentError(false)
        setComment(e.target.value)
    }

    // Type
    const [type, setType] = useState('tree')
    function handleTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setType(e.target.value)
        props.onChange({ ...props.item, type: e.target.value as any })
    }

    function handleConfirm() {
        if (name !== '' && comment !== '') {
            props.onSuccess(name, comment)
            return
        }
        if (name === '') {
            setIsNameError(true)
        }
        if (comment === '') {
            setIsCommentError(true)
        }
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic"
                    label="昵称"
                    error={isNameError}
                    value={name}
                    onChange={handleNameChange}
                    style={{ width: '100%' }} />
                <br />
                <br />
                <TextField id="standard-multiline-flexible"
                    label="留言"
                    multiline
                    error={isCommentError}
                    value={comment}
                    onChange={handleCommentChange}
                    style={{ width: '100%' }}
                />
                <br />
                <br />
                <TextField
                    id="standard-select-currency"
                    select
                    label="类型"
                    value={type}
                    onChange={handleTypeChange}
                    helperText="选择你想要种植的植物类型"
                >
                    {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>

            <h2>说明:</h2>
            <p>填写你的昵称和留言.</p>
            <p>并在上方的地球中, 通过鼠标点击确定你要种植的位置</p>
            <p>最后点确认, 便可种下一颗专属于你的小植物!</p>
            <br />
            <Button onClick={handleConfirm} variant="outlined" color="primary">确认</Button>
            <Button onClick={props.onCancel} variant="outlined" color="primary" style={{ marginLeft: 20 }}>取消</Button>
        </div>
    )
}

export default PublishPage
