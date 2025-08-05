-- 기존 users 테이블 DDL
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 기본 사용자 추가 (DML)
INSERT INTO users (email, password)
  VALUES ('miles@gmail.com', 'hello-world');


-- 새로운 todos 테이블 DDL
CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- 외래키 (user_id) 설정
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 예시 할 일 추가 (DML)
INSERT INTO todos (content, completed, user_id)
  VALUES 
    ('React Query 실습하기', false, 1),
    ('API 라우터 구조 나누기', true, 1);
