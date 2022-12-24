import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import style from './NewItem.module.css'

function NewItem({ onUpdated }) {
  const [todoContents, setTodoContents] = useState('')

    const createItem = async function (todoContents) {
      try {
        const { data } = await axios.post('./api/todos', {
          'item-contents': todoContents,
        })
        setTodoContents('')
        if (onUpdated) {
          onUpdated()
        }
    } catch (err) {
      alert(
        `エラーが発生しました。 ${err?.message || 'Unkown Error'},
          err?.response?.statusText || 'No server Message'
        }`
      )
      console.error('Error message:', err?.message)
      console.error('Error response:', err?.response)
    }
  }

return (
    <>
      <div className={style.cover}>
       <div className={style.coverTitle}>新規登録</div>
       <div className={Style.coverInput}>
          <textarea
            className={style.input}
            value={todoContents}
            onChange={(V) => {
               setTodoContents(v.target.value)
            }}
          />
        </div>
        <div className={style.coverButton}>
          <Button
            className={style.button}
            onClick={() => createItem(todoContents)}
          >
            登録
          </Button>
        </div>
      </div>
    </>
  )
}

export default NewItem
