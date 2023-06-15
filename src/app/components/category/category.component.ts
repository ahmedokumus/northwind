import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  currentCategory: Category | null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategries();
  }

  getCategries() {
    this.categoryService.getCategory().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item list-group-item-action active';
    } else {
      return 'list-group-item list-group-item-action';
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item list-group-item-action active';
    } else {
      return 'list-group-item list-group-item-action';
    }
  }

  deleteCurrentCategory() {
    if (this.currentCategory) {
      this.currentCategory = null;
    }
  }
}
