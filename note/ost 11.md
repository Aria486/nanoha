リリース手順
============
## 1.githubでソースマージ
1. client/develop  -> client/master
2. server/develop  -> server/master
3. lambda/develop  -> lambda/master


## 2. aws lambda確認
* 最新ファイルですか？
* Teams連携の変数
* s3のSDB config修正


## 3.リリース用タグ作成
OST機能追加

https://github.com/DreamArts/JcomCSSR/releases
1. 対象ブランチがclient/masterに対して「pc_vx.x.x」形式のタグ名(例：「pc_v1.0.9」)を作成
2. 対象ブランチがserver/masterに対して「api_vx.x.x」形式のタグ名(例：「api_v1.0.9」)を作成

## 4.本番環境jcccapp02適用
1. jcccapp02(10.10.4.158) にアクセス
```sh
ssh -i ./id_rsa china_cuijj@sgw.diol.jp
ssh jcyizbx01
ssh 10.10.4.158
```
2. Client側のdeploy.sh修正と実行
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_pc/
vi deploy.sh
TAG=pc_v1.0.5

# スクリプト実行
sh deploy.sh
```
3. Server側のdeploy.sh修正と実行
```sh
# タグ名修正
cd /opt/node/apps/jcomassist/
vi deploy.sh
TAG=api_v1.0.5

# kartes、proposals、disclosures db data修正
kartes、proposalsはスクリプト実行
node ./tool/ostmigrationdata/migration_proposals.js
node ./tool/ostmigrationdata/migration_karte.js
disclosures データ削除

mongo
show dbs
use cssr
show collections
db.disclosures.remove()


# スクリプト実行
sh deploy.sh
```

4. DA 管理用API
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_api/
# スクリプト実行
sh deploy.sh
```

5. DA 管理用PC
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_admin/
# スクリプト実行
sh deploy.sh
```

## 5.本番環境jcccapp03適用
jcccapp03にアクセス後適用手順はjcccapp02の操作手順と同じ
1. jcccapp03(10.10.3.179) にアクセス
```sh
ssh 10.10.3.179
```
2. Client側のdeploy.sh修正と実行
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_pc/
vi deploy.sh
TAG=pc_v1.0.5

# スクリプト実行
sh deploy.sh
```
3. Server側のdeploy.sh修正と実行
```sh
# タグ名修正
cd /opt/node/apps/jcomassist/
vi deploy.sh
TAG=api_v1.0.5

# スクリプト実行
sh deploy.sh
```

4. DA 管理用API
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_api/
# スクリプト実行
sh deploy.sh
```

5. DA 管理用PC
```sh
# タグ名修正
cd /opt/node/apps/jcomassist_admin/
# スクリプト実行
sh deploy.sh
```

## 6.Lambda処理発行する
1.[管理画面](https://jcm-cc.yi-manage.jp:8008)　にアクセス

2.ジョブ定義　
* タイプ	TunerSync
* 説明	チューナー更新
* 実行環境 Lambda
* クーロン設定 20 4 * * *
* 有効　オン
* 保存

3. 新しいジョブキューを追加する
* ステータス　「未処理」
* タイプ　「TunerSync」
* 有効　オン　(画面一番下の所に「有効」が置く)
4. ジョブキュー保存後に、即时実施される

## 7.機能検証