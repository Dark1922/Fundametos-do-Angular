package com.cursos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cursos.model.Curso;
import com.cursos.repository.CursoRepository;

@RequestMapping(path = "/cursos")
@RestController
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;

	@GetMapping
	public ResponseEntity<List<Curso>> listaCursos() {
		return ResponseEntity.ok(cursoRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Curso> buscarPorId(@PathVariable Long id) {
		return cursoRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<Curso> salvar(@RequestBody Curso curso) {
		curso = cursoRepository.save(curso);
		return ResponseEntity.status(HttpStatus.CREATED).body(curso);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		if (!cursoRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		cursoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/{id}")
	public ResponseEntity<Curso> atualizar(@PathVariable Long id, @RequestBody Curso curso) {
		if (!cursoRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		curso.setId(id); 
		curso = cursoRepository.save(curso);
		return ResponseEntity.ok(curso);
	}

}
