import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

const data = [
    {
        label: "Estrelas que este repositório tem no github",
        key: "stargazers_count"
    },
    {
        label: "Número de visualizações deste repositório",
        key: "subscribers_count"
    },
    {
        label: "Número de forks",
        key: "forks"
    },
    {
        label: "Ultima atualização em",
        key: "pushed_at",
        format: (date) => dayjs(date).locale('pt-br').format('DD MMMM, YYYY'),
    },
    {
        label: "Linhas de Javascript alimentando o site",
        value: 591
    }
]

export default data