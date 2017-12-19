import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  showJoke = false;

  todos: any[] = [];

  todoText = '';

  isEditMode = false;
  selectedIndex: number;


  constructor(private router: Router ) { }

  ngOnInit() {
    this.addTodo('Einkaufen');
    this.addTodo('Abwaschen');
    this.addTodo('Aufräumen');
    this.addTodo('Schlafen');
    this.addTodo('Zocken');
    this.addTodo('Arbeiten');
    this.addTodo('Wandern');
    this.addTodo('Schwimmen');
    this.addTodo('Malen');

    const randomNumber = Math.floor(Math.random() * this.todos.length) + 1;
    for (let i = 0; i < randomNumber; i++) {
      this.todos.splice(i, 1);
    }

  }

  addTodo(todoText?: string) {
    if (todoText) {
      this.todos.push({ 'text': todoText, changeCount: 0 });
    } else {
      this.todos.push({ 'text': this.todoText, changeCount: 0 });
      this.todoText = '';
    }
    this.showJoke = false;
  }

  removeTodo(indexToDelete) {
    console.log('removing element #' + indexToDelete);
    this.todos.splice(indexToDelete, 1);
    this.showJoke = true;

    this.exitEditMode();
  }

  updateTodo() {
    console.log('edit ' + this.todoText);
    const selectedTodo = this.todos[this.selectedIndex];
    if (selectedTodo.text !== this.todoText) {
      selectedTodo.text = this.todoText;
      selectedTodo.changeCount += 1;
    }

    this.showJoke = false;

    this.exitEditMode();
  }

  enterEditMode(index: number) {
    this.todoText = this.todos[index].text;
    this.isEditMode = true;
    this.selectedIndex = index;
  }

  private exitEditMode() {
    this.todoText = '';
    this.isEditMode = false;
    this.selectedIndex = null;
  }

}
