import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
.use(HttpApi) /** 번역 파일 불러오기 */
.use(LanguageDetector) /** 브라우저 언어 감지 */
.use(initReactI18next) /** react-i18next 초기화 */
.init({
    fallbackLng: 'ko', /** 지원하지 않는 언어일 때 기본 언어 */
    supportedLngs: ['ko', 'en', "jp"], /** 지원할 언어 리스트 */
    debug: false,
    interpolation: {
        /** 
         * 문자열에 변수를 넣을 때 HTML을 이스케이프(escape)할지 여부
         * true : i18next가 HTML을 이스케이프한다.
         * false : i18next는 이스케이프하지 않는다. React가 대신 처리한다.
         */
      escapeValue: false,  
    },
    backend: {
      loadPath: '/language/{{lng}}.json', /** 번역 파일 경로 (public/language/{{lng}}.json) */
    },
});

export default i18n

