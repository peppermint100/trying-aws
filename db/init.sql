DROP database tryingaws;
CREATE database tryingaws;
USE tryingaws;

CREATE table post (
    imgKey VARCHAR(200) PRIMARY KEY,
    imgLocation VARCHAR(300) NOT NULL,
    imgText VARCHAR(100)
)
DEFAULT CHARSET=utf8;
