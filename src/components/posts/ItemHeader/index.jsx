import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import { ReactComponent as SettingsIcon } from '@assets/images/settings.svg'
import styles from './index.module.scss'

const DropdownMwnu = ({ handleDeletePost }) => (
  <div className={styles['Menu-post__dropdown']}>
    <div className={styles['Edit']}>
      <Link to="/edit/12">Edit</Link>
    </div>

    <div className={styles['Delete']} onClick={handleDeletePost}>Delete</div>
  </div>
)

const ItemHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleDeletePost = () => {
    setToggleMenu(!toggleMenu)
    
    console.log('Delete ...')
  }

  return(
    <div className={styles['Header']}>
      <div className={styles['User-picture']}>
        <AvatarIcon alt="User picture" />
      </div>  

      <div className={styles['Title-post']}>
        <Link to="/posts/12">
          <h3>This is title</h3>
        </Link>
      </div>

      <div className={styles['Menu-post']}>
        <SettingsIcon 
          className={styles['Icon']}
          onClick={handleToggleMenu}   
        />

        {
          (toggleMenu) 
          ? <DropdownMwnu handleDeletePost={handleDeletePost} />
          : null
        }
      </div>
    </div>
  )
}

export default ItemHeader