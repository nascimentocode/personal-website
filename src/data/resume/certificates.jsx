import { useTranslation } from 'react-i18next';

function getCertificates(){
    const { t } = useTranslation('certificates')

    const certificates = [
        {
            title: t('pythonUdemy'),
            imageURL: "/personal-website/images/certificates/udemyPython.jpg",
        },
        {
            title: t('imersao7Alura'),
            imageURL: "/personal-website/images/certificates/aluraImersaoDev7.jpg",
        },
        {
            title: "Discover",
            imageURL: "/personal-website/images/certificates/discover.jpg",
        },
        {
            title: t('intensaoJS'),
            imageURL: "/personal-website/images/certificates/intensivaoJS.jpg",
        },
        {
            title: "NWL Expert Python",
            imageURL: "/personal-website/images/certificates/NWL_Expert_Python.jpg",
        },
        {
            title: "NWL Expert NodeJS",
            imageURL: "/personal-website/images/certificates/NWL_Expert_NodeJS.jpg",
        },
        {
            title: t('pythonHashtag'),
            imageURL: "/personal-website/images/certificates/Hashtagtreinamentos-Python.jpg",
        },
        {
            title: t('pythonEmpowerdata'),
            imageURL: "/personal-website/images/certificates/empowerdata.jpg",
        },
        {
            title: "NWL Unite Python",
            imageURL: "/personal-website/images/certificates/NWL_Unite_Python.jpg",
        },
        {
            title: "Pystack Week 10",
            imageURL: "/personal-website/images/certificates/pystack-week-10.png",
        },
    ]

    return certificates
}

export default getCertificates