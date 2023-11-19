import style from "./RightMenu.module.css"

function RightMenu() {
  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}></div>
        <div className={style.empty}></div>
      </div>
    </div>
  )
}

export default RightMenu
