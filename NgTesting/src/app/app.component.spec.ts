import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppServiceService } from './app-service.service'

describe('AppComponent', () => {
  let appService: AppServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AppServiceService]
    }).compileComponents();

    appService = TestBed.inject(AppServiceService)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NgTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NgTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('NgTesting app is running!');
  });

  it('expect example', () => {
    let a = 5
    a = a + 7

    expect(a).toBe(12)
  });

  it('expect service',() => {
    //const appService = new AppServiceService();
    const value = appService.getData();
    expect(value).toBe('Hello World!');
    const appServiceSpy = spyOn(appService, 'getData').and.returnValue('8');
    expect(appServiceSpy()).toBe('8');
    expect(appServiceSpy.calls.count()).toBe(1)

    const exampleSpy = jasmine.createSpyObj('ExampleClass', [
      'getData',
      'getValue',
    ])

    exampleSpy.getValue.and.returnValue(7)
    expect(exampleSpy.getValue()).toBe(7)
    expect(exampleSpy.getValue).toHaveBeenCalled()
    //const getValueSpy = jasmine.createSpy('getValue')
    //getValueSpy.and.returnValue(2)
    //expect(getValueSpy()).toBe(2)
    //expect(getValueSpy.getValue).toHaveBeenCalled()
  });
});
