import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

import { useTranslation } from 'react-i18next';

function getStatsSite() {
    const { t } = useTranslation('siteStats')
        
    const data = [
        {
            label: t('stars'),
            key: "stargazers_count"
        },
        {
            label: t('views'),
            key: "subscribers_count"
        },
        {
            label: t('forks'),
            key: "forks"
        },
        {
            label: t('lastUpdated'),
            key: "pushed_at",
            format: (date) => dayjs(date).locale('pt-br').format('DD MMMM, YYYY'),
        },
        {
            label: t('jsLines'),
            value: 591
        }
    ]

    return data
}

export default getStatsSite