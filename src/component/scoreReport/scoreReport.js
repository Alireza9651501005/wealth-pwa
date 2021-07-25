

const ScoreReport = () => {
    return (
        <div style={{padding:'40px'}}>
            <div style={{ backgroundColor: 'red', borderRadius: '15px', margin: 'auto',height:'50px' }}>
                <img src="http://pms-api.myfreenet.ir/public/constant-material/interactive-score.png" style={{ float: 'right' ,height:'50px',marginRight:'-25px'}} />
                <img src="http://pms-api.myfreenet.ir/public/constant-material/interactive-score.png" style={{ float: 'left' ,height:'30px' }} />
            </div>
        </div>
        // <div className="container">
        //     <div className="row mt-3" style={{ backgroundColor: 'red', borderRadius: '15px',margin:'auto' }}>
        //         <img src="http://pms-api.myfreenet.ir/public/constant-material/interactive-score.png" style={{marginLeft:'-10'}} className="col-2 float-right" />
        //         <div className="col-8"></div>
        //         <img src="http://pms-api.myfreenet.ir/public/constant-material/interactive-score.png" className="col-2 float-left" />
        //     </div>
        // </div>
    )
}

export default ScoreReport;