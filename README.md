# KartvizitApp

KartvizitApp, kullanıcıların dijital kartvizitler oluşturmasına ve yönetmesine olanak tanıyan bir Angular uygulamasıdır.

## 🌐 Demo

Uygulamayı canlı olarak incelemek için aşağıdaki bağlantıyı ziyaret edebilirsiniz:

🔗 **[KartvizitApp Demo](https://ia-cards.netlify.app/)**

## 🚀 Proje Hakkında

Bu proje **Angular CLI 17.3.1** sürümü kullanılarak oluşturulmuştur.

## 📦 Kurulum

Projeyi yerel ortamınıza kurmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```sh
   git clone https://github.com/kullaniciadi/kartvizitapp.git
   ```

2. **Proje dizinine gidin:**
   ```sh
   cd kartvizitapp
   ```

3. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   ```

## 💻 Geliştirme Sunucusu

Aşağıdaki komutu çalıştırarak yerel geliştirme sunucusunu başlatabilirsiniz:

```sh
ng serve
```

Daha sonra tarayıcınızdan **[http://localhost:4200/](http://localhost:4200/)** adresine giderek uygulamayı görüntüleyebilirsiniz. Kaynak dosyalarda yapılan değişiklikler otomatik olarak yeniden yüklenecektir.

## 🏗️ Proje Yapısı

- **src/app/components/** → Uygulamanın bileşenleri
- **src/app/services/** → API çağrıları ve iş mantığı için servisler
- **src/assets/** → Statik dosyalar (görseller, JSON vb.)
- **src/environments/** → Ortam değişkenleri (development & production)

## 🛠️ Kullanılabilir Komutlar

### 📌 Yeni Bir Bileşen Oluşturma

```sh
ng generate component component-name
```

Bunun yanı sıra, aşağıdaki komutlarla farklı Angular yapılarını oluşturabilirsiniz:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### 🔨 Projeyi Derleme

```sh
ng build
```

Derleme çıktıları **dist/** klasöründe saklanacaktır.

### ✅ Birim Testleri Çalıştırma

```sh
ng test
```

Birim testleri **Karma** kullanarak çalıştırılır.

### 🔍 End-to-End (e2e) Testleri Çalıştırma

```sh
ng e2e
```

Bu komutu kullanabilmek için öncelikle bir e2e test paketi yüklenmelidir.

## 📖 Daha Fazla Bilgi

Daha fazla bilgi için **Angular CLI** komut referansına göz atabilirsiniz:

🔗 [Angular CLI Dokümantasyonu](https://angular.io/cli)

---

📌 **Katkıda Bulunmak İster misiniz?**
Eğer projeye katkıda bulunmak istiyorsanız, lütfen bir **pull request** oluşturun veya bir **issue** açın.

💡 **Lisans:** MIT

