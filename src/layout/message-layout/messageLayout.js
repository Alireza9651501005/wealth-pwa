import StyleSheets from "./style/messageLayout.module.css";

const MessageLayout = (props) => {
    return (
        <div>
            {props.message

                ? <div style={{ height: '70px', borderRadius: '15px', backgroundColor: '#f5f5fa', margin: '10px 20px 10px 20px' }}>
                    <div style={{ display: 'inline' }}>
                        <span style={{ direction: 'rtl', float: 'right', margin: '15px 10px 0 0', fontFamily: 'IRANSansFN' }}>
                            690 به امتیاز شما افزوده شد
                        </span>
                        <span style={{ direction: 'rtl', float: 'right', margin: '5px 10px 0 0', fontFamily: 'IRANSansFN' }}>
                            به دوره های ثروت آفرینان خوش آمدید
                         </span>
                    </div>
                    <div style={{ display: 'inline' }}>
                        <span style={{ fontSize: '12px', float: 'left', margin: '0px 0 50px 10px', fontFamily: 'IRANSansFN' }}>
                            9 خرداد
                          <br />
                          4:25
                             </span>
                    </div>
                </div>
                :
                <div>
                    <img className={`${StyleSheets.messageEmpty} ${StyleSheets.center}`} />
                    <br />
                    <span style={{ fontFamily: 'IRANSans' }} className={StyleSheets.centerSpan}>شما هم اکنون پیامی ندارید</span>
                </div>
            }
        </div>
    )
}

export default MessageLayout;