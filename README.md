# nextbox
a headless ui lib.

## Comprise

- nextbox
  - core
  - ui
  - shared
- template
  - admin
- book
- cli

## Theme Variable

### Color

**metric**

- tint 相对于base的浅色

- [base] 标准

- shade 相对与base的深色

**name**

color.name.metric[.dark]

| Name        | Description |
| ----------- | ----------- |
| primary     |             |
| minor       |             |
| info        |             |
| success     |             |
| warning     |             |
| error       |             |
| background  |             |
| placeholder |             |
| disabled    |             |
| border      |             |
| text        |             |
| shadow      |             |
|             |             |

### Size

**metric**

- base

- no
- xs
- sm
- md
- lg
- xl

**name**

size.name.metric

| Name          | Description |
| ------------- | ----------- |
| text          |             |
| border        |             |
| shadow        |             |
| margin        |             |
| padding       |             |
| space         |             |
| border-radius |             |
|               |             |



## Components

### Basic 基本组件

#### Button

**core**

```ts
interface UseButtonProp{
    
}

interface UseButtonReturn{
    
}

interface ButtonCtx{
    
}
```

**ui**

```ts
interface ButtonProp{
    
}

interface ButtonSlot{
    
}

interface ButtonExpose{
    
}
```

#### Link

#### Icon

#### Card

#### Drawer

#### Divider

#### ScrollView

#### Ellipsis

#### Collapse

#### Typesetting



### Layout 布局组件

#### Flex

#### Grid

#### Space



### Form 表单组件

#### Form

#### FormItem

#### Input

#### Radio

#### Checkbox

#### Switch

#### File

#### Group

#### Slider

#### Range

#### Time

#### Date

#### Cascader

#### Transfer

#### Rate

#### Empty

#### Content



### Display 展示组件

#### Loading

#### Image

#### Parallax

#### Banner

#### TimeLine

#### Tag

#### Badge

#### Skeleton 

#### Avatar



### Editor 编辑器

#### Markdown

#### CodeEditor

#### Editor



### Data 数据组件

#### Table

#### List

#### Tree

#### Code

#### Markdown



### Media 媒体组件

#### Video

#### Audio

#### Picture

#### Screen



### Hint 提示组件

#### Info

#### Warn

#### Error

#### Success

#### Fail



### Interactive Feedback  交互反馈组件

#### Dialog

#### Message

#### Notice

#### Popover

#### Popup

#### Result



### Navigation 导航组件

#### Navigation

#### Menu

#### Tabs

#### Breadcrumb 

#### Dropdown 

#### Steps

#### Catalog

#### Side

#### Pagination

#### LoadingBar



### Part 小部件

#### Widget 小窗口

#### Bar

#### Color

#### Affix

#### BackTop





### Performance 性能组件

#### VirtualList 虚拟滚动

#### LazyImage 图片懒加载

#### BreakPoint 断点上传下载



### Animate 动画组件

#### Transtion



### Charts 图表组件

#### ECharts

#### Line

#### Bar

#### Pie

...



### Map 地图组件

#### GaodeMap



### Advanced 高级组件

#### AdForm

#### CRUD





## Global Hooks

### useTheme

### useConfig

### usePlatform

### useVModel
