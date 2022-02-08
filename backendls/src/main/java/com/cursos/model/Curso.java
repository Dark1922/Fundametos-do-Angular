package com.cursos.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Curso {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	@Column(nullable = false)
	private Long id;
	
	@Column(nullable = false, length = 90)
	private String nomeCurso;
	
	@Column(nullable = false, length = 90)
	private String areaCurso;
	
	@Column(nullable = false)
	private Double valorCurso;
}
