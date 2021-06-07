import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css'
import { ko } from "date-fns/esm/locale";

const SubModal = (props) => {
    
    const {open, close, create} = props;
    //open에는 open 상태를, close에는 close하는 함수를 받아옴. project 함수는 input을 띄운다.

    const [startDate, setStartDate] = useState();
    const [endDate, setendDate] = useState();

    return(
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        <p>
                            Create new Project! <button onClick={close}> close </button>
                        </p>  
                    </header>
                    <main>
                        <p>Title: <input id='taskname'/></p>
                        <p>Explanation: <input id='exp'/></p>
                        <p>Start:
                        <DatePicker id='startdate'
                            locale={ko}	// 언어설정 기본값은 영어
                            dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            minDate={new Date()}	// 선택할 수 있는 최소 날짜값 지정 
                            closeOnScroll={true}	// 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                            selected={startDate}
                            onChange={Date => setStartDate(Date)}
                        />
                        </p>

                        <p>End:
                        <DatePicker id='enddate'
                            locale={ko}	// 언어설정 기본값은 영어
                            dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            minDate={new Date()}	// 선택할 수 있는 최소 날짜값 지정 
                            closeOnScroll={true}	// 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                            selected={endDate}
                            onChange={Date => setendDate(Date)}
                        />
                        </p>

                        <p>Todo: <input id='todo'/></p>
                        <p>Related Schedule: <input id='related'/></p>
                    </main>
                    <footer>
                        <button onClick={create}> Create </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default SubModal;