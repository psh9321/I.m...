
import "./i18n.js"
import { useTranslation } from "react-i18next"

function App() {
    const { t, i18n } = useTranslation();

    function OnClickChangeLanguageCallback(e : React.UIEvent<HTMLButtonElement>) {
        i18n.changeLanguage(e.currentTarget.value)
    }

  return (
    <>
        <h1>다국어 처리 를 위한 라이브러리</h1>
            <ul className="flex">
            <li><button onClick={OnClickChangeLanguageCallback} value={"ko"}>KO</button></li>
            <li><button onClick={OnClickChangeLanguageCallback} value={"en"}>EN</button></li>
            <li><button onClick={OnClickChangeLanguageCallback} value={"jp"}>JP</button></li>
            </ul>
            <dl>
            <dt>{t("name")}</dt>
            <dd>{t("description")}</dd>
            </dl>
    </>
  )
}

export default App
