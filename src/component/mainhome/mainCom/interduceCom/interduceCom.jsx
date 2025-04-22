function InterduceCom({ className, iframeID, videoId }) {
  return (
    // 소개 컴포넌트 컨테이너
    <div
      className={`
        grid 
        grid-rows-[2fr_1fr] 
        border 
        border-white 
        dark:border-black 
        ml-[1%] 
        mr-[1%] 
        ${className}
      `}
    >
      {/* 유튜브 영상 iframe */}
      <div className="sub_con_img1">
        <iframe
          id={iframeID}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* 내용 섹션 */}
      <div
        className="
          flex 
          flex-col 
          justify-center 
          ml-[7%] 
          mr-[7%]
        "
      >
        {/* 작성자 */}
        <p
          className="
            text-white 
            dark:text-black 
            text-[.7%] 
            mb-[3%]
          "
        >
          정우수
        </p>
        {/* 제목 */}
        <h3
          className="
            text-white 
            dark:text-black 
            mb-[3%]
          "
        >
          제목
        </h3>
        {/* 설명 */}
        <p
          className="
            text-white 
            dark:text-black 
            pb-[3%] 
            border-b 
            border-b-white 
            dark:border-b-black
          "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          impedit fugit, officia esse veritatis deserunt eos molestiae. Sunt
          totam magni, magnam excepturi, nihil quibusdam voluptates atque cum
          quia sit dignissimos?
        </p>
        {/* 아이콘 섹션 (조회수, 좋아요) */}
        <div
          className="
            mt-[1%] 
            justify-between 
            flex
          "
        >
          <i
            className="
              fa-regular 
              fa-eye 
              text-white 
              dark:text-black 
              text-xl
            "
          ></i>
          <i
            className="
              fa-regular 
              fa-heart 
              text-red-700 
              text-xl
            "
          ></i>
        </div>
      </div>
    </div>
  );
}

export default InterduceCom;
