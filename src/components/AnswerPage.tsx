import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import { useState, useEffect } from 'react'

interface Question {
    question: string
    answers: {
        [key: string]: string
    }
    right: string
    description: JSX.Element | string | null
}

const questions = [
    {
        question: 'Are you OK?',
        answers: {
            A: 'Yes',
            B: 'No',
        },
        right: 'A',
        description: <p>相关解释.</p>
    },
    {
        question: '你好吗?',
        answers: {
            A: '好',
            B: '不好',
        },
        right: 'A',
        description: <p>相关解释.</p>
    }
]

interface Props {
    onSuccess: () => void
    onCancel: () => void
}

function AnswerPage(props: Props) {

    const [value, setValue] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue((e.target as HTMLInputElement).value)
    }

    const [q, setQ] = useState({
        question: '问题加载中...',
        answers: {
            A: '答案加载中...',
        },
        right: 'B',
        description: <p>无.</p>
    } as Question)

    //不含最大值, 含最小值
    function randomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    useEffect(() => {
        setQ(questions[randomInt(0, questions.length)])
    }, [])

    function onFresh() {
        setQ(questions[randomInt(0, questions.length)])
        setValue('')
    }

    return (
        <div>
            <h2>{q.question}</h2>
            <FormControl>
                <RadioGroup value={value} onChange={handleChange}>
                    {Object.keys(q.answers).map((key) =>
                        <FormControlLabel value={key}
                            key={key}
                            label={<span><b>{key}.</b> {q.answers[key]}</span>}
                            control={<Radio color={key === q.right ? 'primary' : 'secondary'} />}
                            disabled={value !== '' && value !== key}
                        />
                    )}
                </RadioGroup>
            </FormControl>

            {(() => {
                if (value === '') {
                    return <br />
                } else if (value === q.right) {
                    return <div>
                        <p style={{ color: '#48cc90' }}>恭喜你答对了!</p>
                        <div>{q.description}</div>
                    </div>
                } else {
                    return <div>
                        <p style={{ color: '#f50057' }}>正确答案是 {q.right + '. ' + q.answers[q.right]}.</p>
                        <div>{q.description}</div>
                    </div>
                }
            })()}

            <br />

            {(() => {
                if (value === '') {
                    return null
                } else if (value === q.right) {
                    return <Button onClick={props.onSuccess} variant="outlined" color="primary">植树</Button>
                } else {
                    return <Button onClick={onFresh} variant="outlined" color="primary">重答</Button>
                }
            })()}
            <Button onClick={props.onCancel} variant="outlined" color="primary" style={value === '' ? {} : { marginLeft: 20 }}>返回</Button>
        </div>
    )

}

export default AnswerPage