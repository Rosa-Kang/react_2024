import { useEffect, useState } from 'react'
import Header from '@/components/common/header/Header' 
import Card from './components/Card'
import styles from './styles/index.module.scss'
import { CardDTO } from '../index/types/card'

function index() {
    const [data, setData] = useState([])
    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if (getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
        else setData([])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.page__contents}>
            { data.length ===0 ? 
                (
                    <div className={styles.page__contents__noData}>
                        <h1>There is no card to display.</h1> 
                    </div>
                ): (
                    data.map((item: CardDTO) => {
                        return <Card prop={item} key={item.id} />
                    })
            )}
            </main>
        </div>
    )
}

export default index