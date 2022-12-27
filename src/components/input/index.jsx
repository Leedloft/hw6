import React from "react";
import styles from './style.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';


const DATA = [
  {
    id: 1,
    title: 'some title post 1',
    body: 'as das da ds'
  }
]

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      postList: DATA
    }
  }


  handleSubmitForm = (e) => {
    e.preventDefault()
    const copiedArr = [...this.state.postList]
    copiedArr.push({
      id: Math.random(),
      body: '',
      title: this.state.postTitle
    })
    this.setState({ postList: copiedArr })
    this.setState({ postTitle: '' })
  }

  handleDelete = (id) => {
    const copiedArr = [...this.state.postList]
    const filteredArr = copiedArr.filter(i => i.id !== id)
    console.log(filteredArr)
    this.setState({ postList: filteredArr })
  }

  handleChangeInput = e => {
    this.setState({
      postTitle: e.target.value
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.input_add}>
          <form onSubmit={this.handleSubmitForm}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" 
              className={styles.input_value}
              value={this.state.postTitle}
              type="text"
              placeholder='enter title'
              onChange={this.handleChangeInput}
            />
            <Box className={styles.add_icon_box} sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab size="small" color="secondary" type='submit' aria-label="add">
                <AddIcon />
              </Fab>
              </Box>
          </form>
        </div>
        {this.state.postList.map((item) => {
          return (
            <div className={styles.added_text} key={item.id}>
              {item.title}
              <Button className={styles.delete_button} onClick={() => this.handleDelete(item.id)} color="secondary" size="small" variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </div>
          )
        })}
      </div>
    )
  }
}