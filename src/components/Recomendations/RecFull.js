import { Button } from '../UI'
import css from './Recomendations.module.css'
export const RecFull = () => {
    const items = [
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
        {
            title: 'algo',
            subtitle: 'noseque',
            image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/73/738d66d693737fbd48836fef84009dd3dc681870_full.jpg'
        },
    ]
    return (
        <div className={css.full}>

            <div className={css.title}>Рекомендации для вас</div>

            <div className={css.items}>{items.map(item => {
                return (
                    <div className={css.item}>
                        <div className={css.avatar}>
                            <img className={css.avatar} src={item.image} alt={Math.random()}/>
                        </div>
                        <div className={css.descSusc}>
                            <div className={css.desc}>
                                <div className={css.itemDesc}>
                                    <div>{item.title}</div>
                                    <div>{item.subtitle}</div>
                                    <div>Общие книги</div>
                                </div>
                                
                            </div>
                            <div className={css.susc}>
                                <Button>Подписаться</Button>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}