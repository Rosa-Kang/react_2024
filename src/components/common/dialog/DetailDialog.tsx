import { CardDTO, Tag } from '@/pages/index/types/card';
import styles from './DetailDialog.module.scss';
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';
import { useEffect, useState } from 'react';

toastConfig (
    {
        theme: 'dark'
    }
)

interface Props {
    data: CardDTO
    handleDialog : (eventValue:boolean) => void
}

function DetailDialog({ data, handleDialog }: Props) {
    const [bookmark, setBookmark] = useState(false);
    
    const closeDialog = () => {
        handleDialog(false)
    }

    const addBookmark = (selected: CardDTO) => {
        setBookmark(true)

        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))
        // 1. 로컬스토리지에 bookmark이라는 데이터가 없을 경우
        if (!getLocalStorage || getLocalStorage === null) {
            localStorage.setItem('bookmark', JSON.stringify([selected]))
            toast('해당 이미지를 북마크에 저장하였습니다. 😄')
        } else {
            // 2. 해당 이미지가 이미 로컬스토리지 bookmark라는 데이터에 저장되어 있을 경우
            if (getLocalStorage.findIndex((item: CardDTO) => item.id === selected.id) > -1) {
                toast('해당 이미지는 이미 북마크에 추가된 상태입니다. ❌')
            } else {
                // 3. 해당 이미지가 로컬스토리지 bookmark라는 데이터에 저장되어 있지 않을 경우 + bookmark라는 데이터에 이미 어떤 값이 담겨 있는 경우
                const res = [...getLocalStorage]
                res.push(selected)
                localStorage.setItem('bookmark', JSON.stringify(res))

                toast('해당 이미지를 북마크에 저장하였습니다. 😄')
            }
        }
    }

    useEffect(() => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if (getLocalStorage && getLocalStorage.findIndex((item: CardDTO) => item.id === data.id) > -1) {
            setBookmark(true)
        } else if (!getLocalStorage) return

        // ESC Key 입력시, 다이얼로그 닫기
        const escKeyDownCloseDialog = (event: any) => {
            console.log('함수호출')
            if (event.key === 'Escape') {
                closeDialog(event)
            }
        }
        // ESC Key를 눌렀을 때, 다이얼로그창 닫기
        window.addEventListener('keydown', escKeyDownCloseDialog) // 위에 만들어 놓은 escKeyDownCloseDialog를 keydown했을 때, 이벤트로 등록한다.
        return () => window.removeEventListener('keydown', escKeyDownCloseDialog)
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.container__dialog}>
            <div className={styles.container__dialog__header}>
                <div className={styles.close}>
                    <button  className={styles.close__button} onClick={closeDialog}>
                        <span className='material-symbols-outlined' style={{fontSize: 28 + 'px'}}>close</span>
                    </button>
                    <img src={data.user.profile_image.small} alt="photographer profile"  className={styles.close__authorImage}/>
                    <span className={styles.close__authorName}>{data.user.name} </span>
                </div>
                <div className={styles.bookmark}>
                    <button className={styles.bookmark__button}  onClick={() => addBookmark(data)}>
                     {/* 구글 아이콘을 사용 */}
                     {bookmark === false ? (
                                <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px' }}>
                                    favorite
                                </span>
                            ) : (
                                <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px', color: 'red' }}>
                                    favorite
                                </span>
                            )}
                            Bookmark
                        </button>
                        <button className={styles.bookmark__button}>Download</button>
                </div>
            </div>
            <div className={styles.container__dialog__body}>
                <img src={data.urls.small} alt="detail image" className={styles.image}/>
            </div>
            <div className={styles.container__dialog__footer}>
                <div className={styles.infoBox}>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>{data.width} x {data.height}</span>
                        <span className={styles.infoBox__item__value}>Search for detail</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>Upload</span>
                        <span className={styles.infoBox__item__value}>{data.created_at.split("T")[0]}</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>Last Update</span>
                        <span className={styles.infoBox__item__value}>{data.updated_at.split("T")[0]}</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>Dowload</span>
                        <span className={styles.infoBox__item__value}>{data.likes}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailDialog