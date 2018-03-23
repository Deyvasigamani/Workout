package com.workoutportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;


@SpringBootApplication
@EnableAsync
@EnableCaching
public class WorkoutPortalApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(WorkoutPortalApplication.class, args);
	}
}
