import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Section, Post, Category, User, MainSite, PostDto } from 'src/app/shared/data/InterFaces/InterFaces';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  newArticle: PostDto;
  public newSection: Section[] = [];
  expandableRow: boolean[];
  sectionStatus: boolean = false;
  editArticle: boolean = false
  formGrup: FormGroup;
  SectionGrup: FormGroup;
  SectionEditGrup: FormGroup;
  categoryList: Category[];
  selectedCategory: Category = null;
  public imagePath;
  imgURL: any;
  mainImg: File;
  sectionImg: File;
  editImg: File;

  constructor(public formBuilder: FormBuilder,
    private backend: DataBaseService,
    public router: Router) {

  }

  ngOnInit(): void {
    this.catList();
    this.formGrup = this.formBuilder.group({
      title: new FormControl(),
      Category: new FormControl(),
      PostText: new FormControl(),
      ReadTime: new FormControl(),
    });
    this.SectionGrup = this.formBuilder.group({
      Sectiontitle: new FormControl(),
      SectionText: new FormControl(),
    });
    this.SectionEditGrup = this.formBuilder.group({
      SectiontitleEdit: new FormControl(),
      SectionTextEdit: new FormControl(),
    });
  }

  selectCategory(selected: number): void {
    this.selectedCategory = this.backend.getOneCategory(selected);
    console.log(selected);
    console.log(this.selectedCategory.id)
  }
  public catList() {
    this.categoryList = this.backend.getCategory();
  }
  save() {
    let forms = this.formGrup.getRawValue() as PostDto;
    forms.Category = this.selectedCategory;
    forms.Sections = this.newSection;
    forms.image = this.mainImg;
    let output = this.backend.createPost(forms);
    console.log(this.mainImg);
    console.log(forms);
    this.router.navigate(['ArticleView/', output]);
  }

  addSection() {
    this.sectionStatus = true;
  }

  editSectionButton(index: number) {
    this.expandableRow = this.newSection.map((v) => false);
    this.expandableRow[index] = true;
    this.editArticle = true;

  }

  editSection(index: number) {
    let sectionEditForms = this.SectionEditGrup.getRawValue() as Section;
    sectionEditForms.SectionText = this.SectionEditGrup.getRawValue()["SectionTextEdit"];
    sectionEditForms.title = this.SectionEditGrup.getRawValue()["SectiontitleEdit"];
    sectionEditForms.image = this.editImg;
    this.newSection[index] = sectionEditForms;

    this.editArticle = false;
    this.expandableRow = this.newSection.map((v) => false);
  }

  saveSection() {
    let sectionForms = this.SectionGrup.getRawValue() as Section;
    sectionForms.title = this.SectionGrup.getRawValue()["Sectiontitle"];
    sectionForms.image = this.sectionImg;
    
    this.newSection.push(sectionForms);
    console.log(sectionForms);
    this.sectionStatus = false;
    this.expandableRow = this.newSection.map((v) => false);
    this.SectionGrup.reset();

  }

  getSectionImg(item: any)
  {
    if(item.target.files.length > 0) 
    {
      this.sectionImg = item.target.files[0];
    }
  }

  getMainImg(item: any)
  {
    if(item.target.files.length > 0) 
    {
      this.mainImg = item.target.files[0];
    }
  }

  getEditImg(item: any)
  {
    if(item.target.files.length > 0) 
    {
      this.editImg = item.target.files[0];
    }
  }

  showFile(item: any)
  {
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(item.target.files[0])
    
  }


}
