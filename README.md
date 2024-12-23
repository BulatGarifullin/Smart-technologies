Области хранения данных:

-   база данных на json-server
-   BFF (Backend From Frontend) эмулятор backend
-   redux sore

Сущности приложения:

-   пользователь: БД(список пользователей), BFF(сессия тек.пользователя), reduxStore(отображение в браузере)
-   роль пользователя: БД(список ролей), BFF(сессия тек.пользователя), reduxStore(отображение в браузере)
-   товар: БД(список товаров), reduxStore(отображение в браузере)
-   комментарий: БД(список комментариев), reduxStore(отображение в браузере)

Таблицы БД и их схемы:

-   категории: categorey: id / name
-   пользователи users: id / login/ password / registered_at / role_id
-   роли roles: id / name
-   товары products: id / image_url / category_id / title / old_price / new_price / discount / content_product
-   комментарии comments: id / author_id(user:id) / product_id(products:id) / content_comment / publishedAt

Схема для reduxStore (на клиенте):

-   user: session / id / login / roleId
-   product: id / imageUrl / category / title / oldPrice / newPrice / discount / contentProduct / comments: id / productId / authorId / author / contentComment / publishedAt
