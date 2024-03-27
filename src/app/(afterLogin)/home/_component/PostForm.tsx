"use client"

import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
//ChangeEventHandler, FormEventHandler 리엑트와 타입스크립트를 함께 사용할떄 이벤트 헨들러 함수에 정확한 이벤트 타입을 지정
import style from './postForm.module.css';

export default function PostForm() {
  // useRef가 사용되곳이 input 이기 때문에 제네릭 <HTMLInputElement>을 해준다. 
  const imageRef = useRef<HTMLInputElement>(null); 
  const [content, setContent] = useState('');
  const me = { // 더미 데이터
    id: 'zerohch0',
    image: '/5Udwvqim.jpg'
  };
  //onChange 이벤트 헨들러 사용시 타입을 ChangeEventHandler로 선언
  // textarea에서 사용 되기 때문에 제네릭 <HTMLTextAreaElement>을 해준다.
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  }

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  }

  const onClickButton = () => {
    imageRef.current?.click();
  }

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea value={content} onChange={onChange} placeholder="무슨 일이 일어나고 있나요?"/>
        <div className={style.postButtonSection}>
          <div className={style.footerButtons}>
            <div className={style.footerButtonLeft}>
              <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
              <button className={style.uploadButton} type="button" onClick={onClickButton}>
                <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <button className={style.actionButton} disabled={!content}>게시하기</button>
          </div>
        </div>
      </div>
    </form>
  )
}