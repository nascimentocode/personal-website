import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/en'

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
            format: (date) => dayjs(date).locale(t('dateLng')).format(t('dateFormat')),
        },
        {
            label: t('jsLines'),
            value: 591
        }
    ]

    return data
}

export default getStatsSite