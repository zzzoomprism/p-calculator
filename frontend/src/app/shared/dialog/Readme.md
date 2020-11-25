#Dialog component

.html
```
<ng-template #templateExample>
  <div>
    <span>Hello world</span>
  </div>
</ng-template>
```

.ts
Init:
```
public dialog: DialogService;
@ViewChild('templateExample', {static: false}) templateExample: TemplateRef<any>;
constructor(private dialogFactoryService: DialogFactoryService) {}
```
Open:
```
this.dialog = this.dialogFactoryService.open({
    headerText: 'text.from.translate.json',
    template: this.templateExample
});
```

OR with options

```
this.dialog = this.dialogFactoryService.open({
    headerText: 'text.from.translate.json',
    template: this.templateExample
}, {
    width: '600px',
    height: '600px',
    panelClass: 'smth'
});
```
