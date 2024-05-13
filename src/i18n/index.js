import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enHomepageTranslations from './locales/en/homepage.json'
import enAboutTranslations from './locales/en/about.json'
import enResumeTranslations from './locales/en/resume/resume.json'
import enStatsTranslations from './locales/en/stats/stats.json'
import enContactTranslations from './locales/en/contact.json'
import enSidebarTranslations from './locales/en/sidebar.json'
import enNavbarTranslations from './locales/en/navbar/navbar.json'
import enLanguageSwitcherTranslations from './locales/en/navbar/languageSwitcher.json'
import enErrorPageTranslations from './locales/en/errorPage.json'
import enCertificatesTranslations from './locales/en/resume/certificates.json'
import enProjectsTranslations from './locales/en/projects.json'
import enPersonalStatsTranslations from './locales/en/stats/personal.json'
import enSiteStatsTranslations from './locales/en/stats/site.json'

import ptBRHomepageTranslations from './locales/ptBR/homepage.json'
import ptBRAboutTranslations from './locales/ptBR/about.json'
import ptBRResumeTranslations from './locales/ptBR/resume/resume.json'
import ptBRStatsTranslations from './locales/ptBR/stats/stats.json'
import ptBRContactTranslations from './locales/ptBR/contact.json'
import ptBRSidebarTranslations from './locales/ptBR/sidebar.json'
import ptBRNavbarTranslations from './locales/ptBR/navbar/navbar.json'
import ptBRLanguageSwitcherTranslations from './locales/ptBR/navbar/languageSwitcher.json'
import ptBRErrorPageTranslations from './locales/ptBR/errorPage.json'
import ptBRCertificatesTranslations from './locales/ptBR/resume/certificates.json'
import ptBRProjectsTranslations from './locales/ptBR/projects.json'
import ptBRPersonalStatsTranslations from './locales/ptBR/stats/personal.json'
import ptBRSiteStatsTranslations from './locales/ptBR/stats/site.json'

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            homepage: enHomepageTranslations,
            about: enAboutTranslations,
            resume: enResumeTranslations,
            stats: enStatsTranslations,
            contact: enContactTranslations,
            sidebar: enSidebarTranslations,
            navbar: enNavbarTranslations,
            languageSwitcher : enLanguageSwitcherTranslations,
            errorPage: enErrorPageTranslations,
            certificates: enCertificatesTranslations,
            projects: enProjectsTranslations,
            personalStats: enPersonalStatsTranslations,
            siteStats: enSiteStatsTranslations,
        },
        ptBR: {
            homepage: ptBRHomepageTranslations,
            about: ptBRAboutTranslations,
            resume: ptBRResumeTranslations,
            stats: ptBRStatsTranslations,
            contact: ptBRContactTranslations,
            sidebar: ptBRSidebarTranslations,
            navbar: ptBRNavbarTranslations,
            languageSwitcher : ptBRLanguageSwitcherTranslations,
            errorPage: ptBRErrorPageTranslations,
            certificates: ptBRCertificatesTranslations,
            projects: ptBRProjectsTranslations,
            personalStats: ptBRPersonalStatsTranslations,
            siteStats: ptBRSiteStatsTranslations,
        },
    }
})

export default i18n

/* 
    Traducoes
        - Menus filtragem
            1. Skills - Curriculo
            2. Projetos OK
*/