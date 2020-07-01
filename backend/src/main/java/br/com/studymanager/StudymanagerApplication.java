package br.com.studymanager;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@SpringBootApplication
@EntityScan(basePackageClasses = {StudymanagerApplication.class})
@ComponentScan(basePackages = "br.com.studymanager.controlador")
@ComponentScan(basePackages = "br.com.studymanager.servico")
@ComponentScan(basePackages = "br.com.studymanager.repositorio")
@ComponentScan(basePackages = "br.com.studymanager.mapeador")
@ComponentScan(basePackages = "br.com.studymanager.config")
@ComponentScan(basePackages = "br.com.studymanager.config.security")
public class StudymanagerApplication {

	@PersistenceContext
	private EntityManager em;

	public static void main(String[] args) {
		SpringApplication.run(StudymanagerApplication.class, args);
	}

	@Bean
	public OpenEntityManagerInViewFilter openEntityManagerInViewFilter() {
		return new OpenEntityManagerInViewFilter();
	}


	@Bean
	public JPAQueryFactory jpaQueryFactory() {
		return new JPAQueryFactory(em);
	}
}
