
  
  export class Post {
    id: number;
    title: string;
    summary: string;
    content: string;
    linkRef: string;
    image: string;
    status:string;
    view: number;
    categories: number[];
    tag: number[];
    listCategories:any
    listTags:any
    slug:string
created_At: Date;
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.summary = '';
      this.content = '';
      this.image = '';
      this.status = ''; // Replace YourEnumValue with one of your enum values
      this.view = 0;
      this.categories = [];
      this.tag = [];
      this.linkRef = '';
      this.slug = '';
      this.created_At=new Date()
    }
  }