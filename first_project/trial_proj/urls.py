from django.urls import path
from trial_proj import views

urlpatterns = [
    path('',views.getRoutes,name="getRoutes"),
    path('products/',views.getProducts,name="getProducts"),
    path('products/<str:pk>',views.getProduct,name="getProduct"),
]
