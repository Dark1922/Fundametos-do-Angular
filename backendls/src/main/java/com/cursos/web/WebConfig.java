package com.cursos.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration	
public class WebConfig implements WebMvcConfigurer {//WebMvcConfigurer métodos de callback para pernsonalizar o spring mvc

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") 
		.allowedMethods("*");
		
	}
	

}
