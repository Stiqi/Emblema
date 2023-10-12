import Welcome from "../Welcome/Welcome";
import style from "./page.module.css";

const PageContent = () => {
  return (
    <div className={style.pagebody}>
      <Welcome />
    </div>
  );
};

export default PageContent;
