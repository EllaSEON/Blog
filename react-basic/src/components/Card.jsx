import PropTypes from "prop-types";

const Card = ({ title, onClick, children }) => {
  return (
    <div className="card mb-3 cursor-pointer" onClick={onClick}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

// 컴포넌트의 props에서 타입을 체크하고 싶다면 propTypes 속성을 할당할 수 있음
//prop에 유효하지 않은 값이 전달되면 자바스크립트 콘솔에 경고가 노출됨. 성능상의 이유로 propTypes는 개발모드에서만 체크한다
// https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element, // 한개의 컴포넌트만 자식으로 설정가능
  onClick: PropTypes.func,
};

// prop가 아무것도 없을때 기본값 설정가능
Card.defaultProps = {
  children: null,
  onClick: () => {}, // 기본값이 필수가 아니면 빈함수
};

export default Card;
