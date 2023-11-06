package com.poscodx.emaillist.repository;

import org.apache.ibatis.jdbc.SQL;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EmaillistRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	
	

}
