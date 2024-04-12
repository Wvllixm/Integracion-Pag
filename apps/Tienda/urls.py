from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='productoss'),
    path('productoss', views.index, name='productoss'),
    path('registro', views.registro, name='registro'),
    path('iniciosesion', views.iniciosesion, name='iniciosesion'),
    path('productoss',views.index),
    path('agregarProducto',views.cargarAgregarProducto),
    path('agregarProductoForm',views.agregarProducto),
    path('agregarProductochef',views.cargarAgregarProductochef),
    path('agregarProductosuchef',views.cargarAgregarProductosuchef),

    path('editarProducto/<sku>',views.cargarEditarProducto),
    path('editarProductoForm',views.editarProductoForm),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('carrito',views.carrito),
    path('fetuccini',views.fetuccini, name='fetuccini'),
    path('aros',views.aros, name='aros'),
    path('panqueque',views.panqueque, name='panqueque'),
    path('productossadmin', views.productossadmin, name='productossadmin'),
    path('productosschef', views.productossadmin, name='productosschef'),
    path('productosssuchef', views.productossadmin, name='productosschef'),
    path('productossmesero', views.index, name='productossmesero'),
]

