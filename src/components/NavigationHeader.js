import React from 'react'
import styles from '../componentsCSS/NavigationHeader.module.css'
import { Link, Outlet } from 'react-router-dom'

function SearchBar() {
    return (
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBar} placeholder='Tìm kiếm sản phẩm ...' />
            <div className={styles.IconContainer}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default function NavigationHeader() {
    return (
        <>
            <div className={styles.Header} >
                <div className={styles.HeaderPart} style={{ flex: 2, justifyContent: 'flex-start' }} >
                    <Link to='/'><img className={styles.Icon}
                        src='https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png'
                        alt='UIT Icon' /></Link>
                    <Link to='/'><p className={styles.ShopName}>UIT SHOP</p></Link>
                    <SearchBar />
                </div>
                <div className={styles.HeaderPart} style={{ flex: 1, }}>
                    <ul className={styles.HeaderRemainingItems}>
                        <li><Link to='/'><i className={`fa-solid fa-house ${styles.iconSize}`}></i><span>Trang Chủ</span></Link></li>
                        <li><Link to='orders'><i className={`fa-solid fa-clipboard ${styles.iconSize}`}></i><span>Đơn hàng</span></Link></li>
                        <li><Link to='cart'><i className={`fa-solid fa-cart-shopping ${styles.iconSize}`}></i><span>Giỏ hàng</span></Link></li>
                        <li><Link to='login'><i className={`fa-solid fa-user ${styles.iconSize}`}></i><span>Đăng nhập</span></Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}