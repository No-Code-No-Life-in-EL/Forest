// import { useState } from 'react'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

// import interface
import { Item } from '../typings/template'

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#48cc90',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow)

const useStyles = makeStyles({
    table: {
        minWidth: 0,
    },
})

interface Users {
    [name: string]: {
        count: number
        comment: string
    }
}

interface Props {
    data: Item[]
    onAnswer: () => void
    // onCancel: () => void
}

function WelcomePage(props: Props) {

    const classes = useStyles()

    const data = props.data
    const rows = {} as Users
    for(let i = 0; i < data.length; i++) {
        if(rows.hasOwnProperty(data[i].author)) {
            rows[data[i].author].count += 1
            rows[data[i].author].comment = data[i].comment
        } else {
            rows[data[i].author] = {count: 1, comment: data[i].comment}
        }
    }

    return (
        <div>
            <h2>规则说明：</h2>
            <p>我们生活在同一个世界，同一个地球，地球是我们永远的家。</p>
            <p>我们每个人都应该为维持地球上的碳平衡，实现碳中和出一份力。</p>
            <p>你知道哪些实现碳中和的方法呢？你能答对这些与碳中和相关的问题吗？快来试着挑战一下吧！</p>
            <p>点击 <b>答题</b> 按钮，便可以开始答题。</p>
            <p>每答对一道题，都可以在上方的地球上植下一棵属于你自己的小树，并进行留言，与所有人分享你的感悟。</p>
            <p>点击小树，可以查看他人的留言。</p>
            <Button onClick={props.onAnswer} variant="outlined" color="primary">答题</Button>
            <br />
            <br />
            <br />
            <Divider />
            <br />
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>名称</StyledTableCell>
                            <StyledTableCell align="right">答题数</StyledTableCell>
                            <StyledTableCell align="right">留言</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(rows).map((key) => (
                            <StyledTableRow key={key}>
                                <StyledTableCell component="th" scope="row">
                                    {key}
                                </StyledTableCell>
                                <StyledTableCell align="right">{rows[key].count}</StyledTableCell>
                                <StyledTableCell align="right">{rows[key].comment}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default WelcomePage
