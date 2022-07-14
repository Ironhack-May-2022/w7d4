import React from 'react'
import { myProjects } from './Projects'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {

	const params = useParams()
	// const { id } = useParams()

	const id = params.id

	console.log(params)

	const project = myProjects.find(project => project.id === id)

	return (
		<>
			<div>ProjectDetails</div>
			<h3>{project.name}</h3>
		</>
	)
}
